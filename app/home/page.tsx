import PostForm from "../components/post-form";
import navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PostForm />
    </div>
  );
}
