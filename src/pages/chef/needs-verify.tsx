import React, { useState } from "react";
import { Button, Card, Checkbox, Input, Popover, Text } from "@parssa/universal-ui";

export default () => {
  const [subject, setSubject] = useState("");
  const [value, setValue] = useState("");
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<{ subject: string; body: string }[]>([]);

  const onSubmit = () => {
    if (!triedSubmit) {
      setTriedSubmit(true);
      setError("Subject is required");
      return;
    }

    if (!value) {
      setError("Content is required");
      return;
    }

    setError("");
    setPosts((p) => [...p, { subject, body: value }]);
    setValue("");
    setSubject("");
  };

  return (
    <div className="min-h-screen max-w-screen-sm mx-auto flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <section className="w-full">
        {triedSubmit && (
          <>
            <Text className="mb-2">Subject</Text>
            <Input
              className="w-full mb-4"
              placeholder="Subject here..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </>
        )}
        <Text className="mb-2">Body</Text>
        <textarea
          className="tracking-tight rounded border disabled:opacity-75 w-full disabled:cursor-not-allowed enabled:hover:transition-colors focus:outline-none ring-0 focus-within:relative transition-[ring] focus-within:z-20 focus:ring focus-within:ring focus:ring-theme-base/50 focus-within:ring-theme-base/50 font-normal placeholder:opacity-50 truncate flex p-size-x text-size leading-size text-theme-base placeholder:text-theme-muted group-data-[uui=true]/card:border-theme-base bg-theme-pure border-theme-base "
          placeholder="Write post here..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button className="w-full mt-2" onClick={onSubmit}>
          Post
        </Button>
        {error && (
          <Text theme="error" className="text-theme-active mt-size-2y">
            {error}
          </Text>
        )}
      </section>

      <section className="mt-8 w-full">
        <Text variant="h3">Your posts</Text>
        {posts.length === 0 && <Text>You haven't posted anything yet...</Text>}
        {posts.map((post, index) => (
          <Card key={index} className="mt-4">
            <Card.Content>
              <Text className="mt-2" variant="h4">
                {post.subject}
              </Text>
              <Text className="mt-2">{post.body}</Text>
            </Card.Content>
          </Card>
        ))}
      </section>
    </div>
  );
};
