import Layout from "../components/layout/Layout";
import NuevoPost from "../components/NuevoPost";
import usePost from "../hooks/usePost";
import Post from "../components/Post";
import { FirebaseContext } from "../firebase";
import { useContext, useEffect } from "react";
import NoAuth from "../components/NoAutn";
import { useRouter } from "next/router";
export default function Home() {
  const { usuario } = useContext(FirebaseContext);
  const router = useRouter();
  
  useEffect(() => {
    if (!usuario) router.push("/iniciar-sesion");
  }, [usuario]);

  const { posts } = usePost("creado");
  return (
    <Layout>
      <NuevoPost />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Layout>
  );
}
