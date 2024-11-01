"use client"
import LoadingSpinner from "@/app/components/common/status/LoadingSpinner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginService } from "@/app/service/user/login.service";
import { useAppDispatch } from "@/lib/store";

export default function OAuthSuccess() {
  const route = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    const routeBack = () => {
      try{
       loginService.handleOAuthCallback(dispatch)  // OAuth 콜백 처리
         console.log("oauth success 도착 완료")
         window.location.href = "/"
      }catch(error){
       console.error("OAuth 처리 중 오류:", error)
      }
    }
    routeBack()
    // window.location.href = "/"
  })
  return (
    <>
      OAuthSuccess !!
      <LoadingSpinner />
    </>
  )
}