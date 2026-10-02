import Superior from "@/componentes/Superior.jsx"
import Posts from "@/componentes/Posts.jsx"

export default function Home() {
  return (
    <>
      <Superior />

      <Posts imge="/avatar-mark-webber.webp" alt="sdads" nombre="Mark Webber " mensaje=" My first tournament today! " accion="reacted to your recent post" />
      <Posts imge="/avatar-angela-gray.webp" alt="fsfsdf" nombre="Angela Gray" mensaje="" accion="followed you"></Posts>
      <Posts imge="/avatar-jacob-thompson.webp" alt="fsfs" nombre="Jacob Thompson " mensaje="Chess club" accion="has joined your group "></Posts>
    </>
    
  );
}

// Mark Webber reacted to your recent post My first tournament today! In ago