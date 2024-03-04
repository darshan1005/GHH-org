import Gallery from './gallery-images'

const gallery = () => {
    return (
        <>
            <div id="Gallery"></div>
            <section className="section-gallery">
                <div className="gallery-title">
                    <p className="title">Gallery</p>
                </div>
                <Gallery />
            </section>
        </>

    )
}

export default gallery;