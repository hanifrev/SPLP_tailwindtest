import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>April Ethereal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex bg-blackgrey mx-auto flex-shrink w-full md:w-11/12">
        <div className="flex flex-col sm:flex-row">
          {/* container above ise used to determinde flex direction of below containers */}
          {/* LEFT SIDE */}
          <div className="w-full">
            <div>
              <h3 className="text-green-500 text-lg sm:text-2xl">
                Online Fair
              </h3>
            </div>
            <div>
              <h5 className="text-gray-400 text-xs sm:text-sm">
                Linux Or Windows Which is it
              </h5>
            </div>
            <div>
              <div>
                <h1 className="text-white text-3xl sm:text-5xl">
                  Study abroad online fair title title title
                </h1>
              </div>
              <div>
                <p className="text-xs sm:text-sm">
                  Chances are unless you are very lucky you will go thru Chances
                  are unless you are very lucky you will go thru
                </p>
              </div>
              <div>
                <form></form>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-full">
            <div className="flex">
              <div>
                RIGHTSIDE
                <img src="https://i.imgur.com/QPhQ2Su.jpg" alt="test" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
