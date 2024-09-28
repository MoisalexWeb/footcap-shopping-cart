import "./Hero.scss"

export const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__texts">
                <h1 className="hero__texts-title"><span>new summer</span> shoes collection</h1>
                <p className="hero__texts-text">Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.</p>
                <a href="#" className="hero__texts-cta">
                    shop now
                    <i className='bx bx-arrow-back'></i>
                </a>
            </div>
        </section>
    )
}
