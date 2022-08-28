import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 350px;
  margin: 100px auto 0;
  border: 1px solid #c8c8c8;
  padding: 25px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const Label = styled.label`
  padding: 10px 0;
`;

function Upload() {
  const videoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("videoFile", event.currentTarget.videoFile.files[0]);
    formData.append("thumbnail", event.currentTarget.thumbnail.files[0]);
    formData.append("title", event.currentTarget.videoTitle.value);
    formData.append("description", event.currentTarget.description.value);
    formData.append(
      "hashtags",
      event.currentTarget.hashtags.value
        .split(",")
        .map((tag: string) => (tag.startsWith("#") ? tag : `#${tag}`))
    );

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };

  return (
    <FormContainer>
      <Title>비디오 등록</Title>
      <form
        className="user-form"
        onSubmit={videoSubmit}
        encType="multipart/form-data"
      >
        <input
          name="videoTitle"
          type="text"
          placeholder="제목을 입력하세요."
          required
        />
        <input
          name="description"
          type="text"
          placeholder="내용을 입력하세요."
          required
        />
        <input
          name="hashtags"
          type="text"
          placeholder="해시태그를 ,로 입력하세요. "
          required
        />
        <Label htmlFor="videoFile">비디오 파일 등록</Label>
        <input
          name="videoFile"
          id="videoFile"
          type="file"
          accept="video/*"
          required
        />
        <Label htmlFor="thumbnail">썸네일 등록</Label>
        <input
          name="thumbnail"
          id="thumbnail"
          type="file"
          accept="image/*"
          required
        />
        <button>등록</button>
      </form>
    </FormContainer>
  );
}
export default Upload;
