/* eslint-disable no-unused-vars */
import Head from 'next/head'
import Button from '../components/Button'
import TextField from '../components/TextField'

export default function Fair1 () {
  return (
    <div className="bg-bluesky">
      <div
        className="h-screen flex py-0 px-2 flex-col justify-start items-center w-full sm:justify-center"
        style={{
          fontFamily: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif']
        }}
      >
        <Head>
          <title>April Ethereal</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <header className="flex flex-row absolute justify-between top-0 w-full sm:w-11/12 px-3 pt-3 sm:top-0 md:top-6">
          <h1 className="text-base font-bold text-white sm:text-2xl">
            Deadly Sun Ent.
          </h1>
          <h1 className="text-base font-bold text-white sm:text-xl">
            Language
          </h1>
        </header>
        <content className="mx-auto flex-shrink w-11/12 pt-24 sm:pt-40 md:pt-0 sm:w-10/12">
          <div className="flex flex-col md:flex-row">
            {/* container above ise used to determinde flex direction of below containers */}
            {/* LEFT SIDE */}
            <div className="w-full pb-16 sm:pb-0">
              <div>
                <h5 className="text-white text-sm pb-2 sm:text-2xl leading-7 sm:pb-8">
                  Sumerian Records Present
                </h5>
              </div>
              <div>
                <h1 className="text-white text-3xl font-bold pb-2 tracking-wide sm:text-6xl leading-10 sm:pb-8 ">
                  Between The Buried and Me | Spring Tour 2018
                </h1>
              </div>
              <div>
                <p className="text-white text-sm sm:text-xl font-light pb-10">
                  Grammy nominated progressive death metal band will coming to
                  your city with special guest The Dear Hunter and Leprous. Sign
                  up to get special offers
                </p>
              </div>
              <form className="flex flex-col sm:flex-row">
                {/* FORM UNDER DEVELOPMENT */}
                <TextField
                  className="h-11 bg-transparent rounded-md border px-3 border-white border-solid text-white placeholder-white text-xs mb-2 mr-0 sm:w-72 sm:mr-1"
                  type="text"
                  placeholder="Email"
                />
                <Button
                  className="h-11 bg-white w-full rounded-md text-skyblue text-xs font-bold sm:w-28 hover:bg-indigo-200"
                  value="Sign Up Now"
                />
              </form>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full">
              <div className="flex w-full mx-auto my-auto">
                <img
                  className="relative mx-auto md:mx-32 w-full md:w-4/12 lg:w-4/12 pl-0 sm:pl-0 md:fixed md:pl-0 sm:pt-10 md:pt-0 md:my-6 lg:my-0 "
                  // src="https://res.cloudinary.com/avl/image/upload/v1611051545/single-page-landing/Group_9.png"
                  src="https://i.imgur.com/a7fbf2C.jpg"
                  // src="https://i.imgur.com/e90Y6Yj.jpg"
                  alt="test"
                />
              </div>
            </div>
          </div>
        </content>
        <footer className="text-center mt-12 relative bottom-5 md:w-11/12 md:absolute">
          <p className="text-white text-xxs sm:text-xs">
            Protected by reCAPTCHA and the Google Privacy Policy and Terms of
            Service apply
          </p>
        </footer>
      </div>
    </div>
  )
}
