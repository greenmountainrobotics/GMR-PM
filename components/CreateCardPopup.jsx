"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import PopupPortal from "@components/PopupPortal";
import PopupForm from "@components/PopupForm";
import { useEffect } from "react";

const CreateCardPopup = ({closePopup}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "", title: ""});

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          title: post.title,
          tag: post.tag,
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
  };

  return (
    <PopupPortal close={closePopup}>
      <div className="relative h-full w-full">
        <PopupForm 
         type='Create'
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={createPrompt}
         className='h-full w-full flex-center flex-col gap-4'
        /> 
      </div>
    </PopupPortal>
  
  );
};

export default CreateCardPopup;
