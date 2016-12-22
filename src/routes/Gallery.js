import React from 'react'

//connect tool
import { connect } from 'dva'

//component
import GalleryList from '../components/Gallery/GalleryList'
import Layout from '../components/Layout/Layout'

//style
import styles from './Gallery.css'

const Gallery = () => {

  return (
   <div className={styles.normal}>
    <Layout />
    <GalleryList />
   </div>
  )
}

export default connect()(Gallery)
