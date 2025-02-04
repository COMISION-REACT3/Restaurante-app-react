import './AboutSection.css'
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <div className='container my-5'>
    <div className='row'>
      <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
          <img src="https://images.pexels.com/photos/30338817/pexels-photo-30338817/free-photo-of-chefs-disfrutando-del-trabajo-en-equipo-en-una-cocina-rustica.jpeg" alt="about img" className='img-fluid w-75 object-fit-cover' />
      </div>
      <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <h2 className='fs-1 mb-5 text-uppercase'>About Us</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora, quas, deserunt odit aliquam repellat repudiandae illum dolorem odio veritatis quam consectetur fugiat et perferendis minus laborum laudantium! Eum, iure.</p>
          <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam et assumenda quasi quod dolores reiciendis molestias accusamus minus rerum quos incidunt? Omnis ad aperiam consequatur asperiores est? Placeat, explicabo?</p>
          <Link to="/about">
        <button className='btn btn-outline-success btn-lg'>More About Us</button>
          </Link>
      </div>          
    </div>
</div> 
  )
}

export default AboutSection