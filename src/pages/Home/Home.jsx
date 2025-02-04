import { AboutSection, ContactInfo, HeaderHome, ImageGallery, MenuSection } from '../../components'

function Home() {
  return (
      <div className='home-page'>
            <HeaderHome/>

            <AboutSection/>

            <MenuSection/>

            <ImageGallery/>

            <ContactInfo/>
      </div>
  )
}

export default Home