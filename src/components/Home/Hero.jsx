import heroVideo from "../../assets/video/short-ezgif.com-crop-video.mp4";

function Hero() {
    return (
        <section className="rev_slider_wrapper">
            <video autoPlay muted loop id="myVideo">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default Hero;