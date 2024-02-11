import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const About: React.FC = () => {
    return (
        <Layout home>
            <section className={styles.headingMd}>
                <p>
                    Linda Brettler, a Los Angeles based architect, draws inspiration from a multitude of architectural styles to design and reimagine homes that reflect each client’s lifestyle and taste.  Capitalizing on a love of both contemporary and historic architecture, Brettler’s portfolio encompasses distinct custom homes that range from a contemporary ground-up to a highly decorative historic renovation.  Transcending all styles is Brettler’s belief that house designs should have an experiential nature, revealing progressive layers with elements of surprise, whimsy and discovery.  Good flow, lighting, proportions, the evidence of the human hand, the synchronicity of all the details with the whole, connecting to nature, and a striving toward beauty are essential to each project.
                    <br /><br />
                    ‘Growing up in Los Angeles, I had the great fortune of being exposed to a wealth of residential architecture’ says Brettler.  ‘This region has always had a rich history that embraces experimentation, romance, and optimism with home forms.’  She also travels extensively, making pilgrimages to (often) obscure residences and buildings across the world that continually fuel her passion for design and detail, unique to each project.
                    <br /><br />
                    Linda majored in biochemistry at Harvard University where she received her BA.  During her senior year, attracted to a Le Corbusier building on campus, she began taking design courses and from that moment her life path was solidified.  (This affirmed her upbringing always making things: painting, sculpture, woodworking, welding, and textile arts.)
                    <br /><br />
                    Upon completing her Masters of Architecture degree at UCLA, Brettler started working at award winning architecture firms, including Moore Ruble Yudell (MRY) and Brenda Levin and Associates.  At these firms she worked on various civic, institutional, and religious projects, eventually heading the design of Caltech’s Avery Center (a student and faculty housing project). Working with Brenda Levin provided a further appreciation for historic projects.
                    <br /><br />
                    In 1996, Brettler founded her own firm to focus on creating bespoke homes for her clients.  ‘My design process is an educational journey for both of us.  I relish the input and interaction clients provide so that each home is distinct and hopefully transformative for them.’
                    <br /><br />
                    Seeing the whole project as one work, she’s involved in all the interior design elements as well – encompassing color, hardware, lighting, built-ins, metal, glass-work, and tile.  She often integrates salvaged items into historic homes and enjoys the challenge of renovating an historic property to fit a contemporary lifestyle.  Her designs also incorporate sustainable design elements such as passive solar/water usage, re-use of materials, respect of nature and the rhythm/scale of neighborhoods.  In her extensive career she’s established strong relationships with excellent general contractors, artisans, consultants, and landscape architects to realize projects in consideration of quality, cost, timeliness, and responsiveness.
                    <br /><br />
                    Linda has been a licensed architect since 1992.  She serves as the Cultural Heritage Commission’s Architect appointee for three historic preservation zones and has previously served on others.  She also served as Councilman appointee for the Mulholland Commission board.  Her projects have been featured in numerous publications, books and Luxe’s Gold List.  Her historic projects have won awards from LA’s Cultural Heritage Commission.
                </p>
            </section>
        </Layout>
    );
};

export default About;