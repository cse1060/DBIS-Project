"use client";
import React from 'react'
import { CldImage, CldUploadButton } from 'next-cloudinary';

async function imgUrl(result: any, widget: any) {
  console.log(result);
}


export default function Upload_Widget(props: any) {
  return (
    <div>
      <CldUploadButton uploadPreset="uxd070o4" onUpload={props.addImg} />
      {/* <CldImage
        width="960"
        height="600"
        alt="img"
        src="wd83sw8cqee2xzxfck5d"
      /> */}
    </div>

  )
}

