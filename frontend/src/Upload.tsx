type UploadProps = {
  onUploadSuccess: () => void;
};

export default function Upload({ onUploadSuccess }: UploadProps) {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("photo", file);

    const res = await fetch(import.meta.env.VITE_API_URL + "/api/photos", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      onUploadSuccess(); // 成功を通知
    }
  };

  return <input type="file" accept="image/*" onChange={onChange} />;
}

