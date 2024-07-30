import React from 'react';

const Contact = () => {
    return (
        <div className='py-10  flex flex-col gap-4 items-center justify-center'>
            <p className='text-lg text-designColor font-semibold tracking-wide'>04. What’s Next?</p>
            <h1 className="text-2xl lg:text-5xl font-semibold tracking-wide">Get In Touch</h1>
            <p className='text-center text-darkText'>
            Although I’m not currently looking for any new opportunities, my inbox is always <br /> open. Whether you have a question or just want to say hi, I’ll try my best to get <br /> back to you!
            </p>
            <a href="mailto:rimanroni386@gmail.com">
                <p className='border-designColor px-4 py-2 border rounded-lg tracking-wider font-semibold'>Say Hello </p>
            </a>
        </div>
    );
};

export default Contact;