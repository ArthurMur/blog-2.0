import { addPost, deletePost } from "@/lib/action"

const ServerActionTestPage = () => {

  return (
    <div className="div">
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="text" name="text"/>
        <input type="text" placeholder="id" name="id"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Создать</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="postId"/>
        <button>Удалить</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage;