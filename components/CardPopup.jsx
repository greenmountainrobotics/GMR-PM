
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";import React from 'react';
import PopupPortal from './PopupPortal';
import Image from "next/image";
import PopupForm from './PopupForm';


const CardPopup = ({promptId, closePopup, refresh}) => {
    const router = useRouter();
  
    const [post, setPost] = useState({ prompt: "", tag: "", title: "" });
    const [submitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState("");

  
    useEffect(() => {
      const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
  
        setPost({
          prompt: data.prompt,
          tag: data.tag,
          title: data.title,
        });
      };
  
      if (promptId) getPromptDetails();
    }, [promptId]);
  
    const updatePrompt = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      if (!promptId) return alert("Missing PromptId!");
  
      try {
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
            title: post.title
          }),
        });
  
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
      closePopup();
      refresh();
    };

    const handleCopy = () => {
      setCopied(post.prompt);
      navigator.clipboard.writeText(post.prompt);
      setTimeout(() => setCopied(false), 3000);
    };

  return(
    <PopupPortal>
      <div className='relative w-full h-full'>
      <Image
          src="/assets/icons/close-button.svg"
          width={30}
          height={30}
          onClick={closePopup}
          className='absolute top-[-20px] right-[-20px] hover:bg-gray-600 p-1 rounded-full z-10000'
      />
      
      <div className='absolute top-[37px] right-[460px] hover:bg-gray-600 p-1 rounded-full z-10000'
         onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={20}
            height={20}
          />
        </div>
      
    <PopupForm 
       type='Save'
       post={post}
       setPost={setPost}
       submitting={submitting}
       handleSubmit={updatePrompt}
      /> 
      </div> 
    </PopupPortal>
  );
};

export default CardPopup;