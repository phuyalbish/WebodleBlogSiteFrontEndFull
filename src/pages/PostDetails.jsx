import React from 'react'
import PostWriter from '../components/PostWriter'
import Thumb from '../images/blog1.jpg'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const PostDetails = () => {


  // const [posts, setPosts] = useState([]);
  
  //  useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Filter the user with id 1
  //       const indivisualpost = data.find(id => indivisualpost.id === userId);
  //       setPosts(indivisualpost);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);


  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="titleWithBack">
          <Link to="/"><IoMdArrowRoundBack/></Link>

        <div className="title">
          <h1>This is the title.</h1>
        <p>This is the subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore quidem, aliquam nemo, laudantium reiciendis harum delectus vero quam rerum officiis nesciunt provident repellendus iusto praesentium impedit optio? At, ad.</p>
        </div>
        </div>
        <div className="post-detail_header">
          <PostWriter userId={1}/>
          <div className="post-detail_buttons">
                <Link to={`/posts/writer/edit`} className='btn sn primary'>Edit</Link>
                <Link to={`/posts/writer/delete`} className='btn sn danger'>Delete</Link>
          </div>
        </div>
        <div className="post-detail_thumbnail">
          <img src={Thumb} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo earum ipsam facere rem repellat aliquid similique illum, saepe beatae. Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium omnis cupiditate repellat, accusamus ad natus perferendis quidem perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius vel assumenda odio eligendi aspernatur cumque quasi eveniet temporibus, quia explicabo atque voluptates est minus. Adipisci, non facilis odio ea quos aliquid omnis. Molestiae vitae error libero itaque animi sunt nulla vero deserunt nesciunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo earum ipsam facere rem repellat aliquid similique illum, saepe beatae. Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium omnis cupiditate repellat, accusamus ad natus perferendis quidem perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius vel assumenda odio eligendi aspernatur cumque quasi eveniet temporibus, quia explicabo atque voluptates est minus. Adipisci, non facilis odio ea quos aliquid omnis. Molestiae vitae error libero itaque animi sunt nulla vero deserunt nesciunt.
        </p><p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo earum ipsam facere rem repellat aliquid similique illum, saepe beatae. Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium omnis cupiditate repellat, accusamus ad natus perferendis quidem perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius vel assumenda odio eligendi aspernatur cumque quasi eveniet temporibus, quia explicabo atque voluptates est minus. Adipisci, non facilis odio ea quos aliquid omnis. Molestiae vitae error libero itaque animi sunt nulla vero deserunt nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati id doloribus eligendi voluptatibus quisquam eveniet ullam aliquam ipsam quaerat error saepe delectus excepturi voluptatum amet quae quod doloremque porro, natus placeat reprehenderit. Consectetur quo sunt nisi facere obcaecati, nam magni dolorem sequi iure laudantium magnam consequuntur aspernatur quod sint numquam id fugit expedita alias sed unde libero molestiae ipsum nihil vero. Voluptas, perspiciatis illo ad accusantium repudiandae nemo exercitationem cum soluta quidem est beatae pariatur necessitatibus! Corporis, rem quo debitis illo nesciunt voluptatibus laudantium sed porro, esse delectus velit recusandae? Laborum recusandae ab reprehenderit repudiandae? Quaerat, debitis! Laborum, maxime?
        </p>
        <p>In conclusion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed, perferendis sequi reprehenderit accusantium saepe quis eos provident nulla amet odit explicabo dolorum, in aliquam cum consectetur. Minima, explicabo repellat.</p>
      </div>
    </section>

  )
}

export default PostDetails