import React from "react";
import Form from '../component/Form';

function Contact() {
    return(
    <>
        <section id="contact" className="mt-32 contact__background">
            <div className="text-white py-14 px-8 z-10 max-w-300 mx-auto md:px-12 lg:py-0 lg:flex xl:px-0 lg:justify-between">
                <article className="lg:pt-12">
                    <h1 className="text-4xl font-medium lg:text-5xl lg:font-medium">Get in Touch</h1>
                    <p className="my-3 leading-7 md:text-xl md:leading-7 lg:max-w-sm">
                        Have any questions or have some projects in mind ?<br />
                        Wirte me a Message.
                    </p>
                </article>  

                <Form/>
            </div>
        </section>
    </>
    )
}

export default Contact;