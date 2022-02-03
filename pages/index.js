import Head from 'next/head'
import Banner from '../components/home/Banner'
import ExploreNearby from '../components/home/ExploreNearby'
import Service from '../components/home/Service'
import Layout from '../components/layout/Layout'

export default function Home() {

  const exploreNearby = [
    {
      title: 'THE GOLD ARC ZOO',
      desc: 'The Gold Arc Zoo is the only zoo within a radius of 2,392 miles. It is also the only zoo in the United States that originated in a King’s grant of royal lands to the people.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643111131/hotel%20web%20app/explore%20nearby/zoo_r4ogj7.jpg"
    },
    {
      title: 'KAILUA BEACH PARK',
      desc: 'Located towards the southern end of Kailua Bay, Kailua Beach Park offers picnic tables, beach volleyball courts, BBQ pits, picnic shelters etc.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643111130/hotel%20web%20app/explore%20nearby/bay_s49ueq.jpg"
    },
    {
      title: 'KAILUA BEACH PARK',
      desc: 'Located towards the southern end of Kailua Bay, Kailua Beach Park offers picnic tables, beach volleyball courts, BBQ pits, picnic shelters etc.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643111130/hotel%20web%20app/explore%20nearby/bay_s49ueq.jpg"
    },
    {
      title: 'THE GOLD ARC ZOO',
      desc: 'The Gold Arc Zoo is the only zoo within a radius of 2,392 miles. It is also the only zoo in the United States that originated in a King’s grant of royal lands to the people.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643111131/hotel%20web%20app/explore%20nearby/zoo_r4ogj7.jpg"
    },
  ]

  const services = [
    {
      title: 'EPICUREAN DELIGHTS',
      desc: 'Continental classics & contemporary cuisines that draw inspiration from the ocean’s daily bounty.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/c_lfill,h_700,w_522/v1643127888/hotel%20web%20app/services/pancakes_widpy6.jpg",
      btn: 'Dining Options',
      link: '/dining'
    },
    {
      title: 'THE ABHASA SPA',
      desc: 'The idyllic location in the heart of a tropical forest provides the perfect destination.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643135475/hotel%20web%20app/services/spa/spa_self3d.jpg",
      btn: 'Spa Treatments',
      link: '/spa'
    },
    {
      title: 'POOL & BEACH',
      desc: 'Privately set cabanas provide exquisite opportunity to explore individual decadence.',
      img: "https://res.cloudinary.com/drpbnvds9/image/upload/v1643127795/hotel%20web%20app/services/pool_kmcz8v.jpg",
      btn: 'Explore',
      link: '/pool'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Gold Arc Hotel</title>
      </Head>

      <Banner />

      <main className="mt-5 max-w-[90%] mx-auto space-y-20 pb-20 2xl:space-y-12 2xl:pb-12 xl:space-y-8 xl:pb-8">
        <section>
          <h2 className="text-3xl text-center my-6 font-semibold font-PlayfairDisplay tracking-wide text-moss md:text-2xl md:my-3">Explore Nearby</h2>
          <div className="flex flex-wrap gap-4 xl:gap-3 lg:gap-2">
            {
              exploreNearby.map(e => (
                <ExploreNearby key={e.title} title={e.title} desc={e.desc} img={e.img} />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-3xl w-1/2 leading-10 mx-auto text-center font-light my-6 font-Sofia tracking-widest text-moss xl:text-xl lg:w-2/3 md:w-3/4 md:text-lg sm:w-full sm:tracking-wider sm:leading-6">THE GOLD ARC, A LUXURY COLLECTION RESORT WILL KEEP YOU ENTERTAINED & IMMERSED IN A CULTURAL ADVENTURE THROUGHOUT YOUR STAY.</h2>
          <div className="flex flex-wrap gap-3 2xl:gap-2 lg:justify-center">
            {
              services.map(s => (
                <Service key={s.title} title={s.title} desc={s.desc} img={s.img} btn={s.btn} link={s.link} />
              ))
            }
          </div>
        </section>

        <section className="text-asphalt text-center w-1/2 mx-auto lg:w-2/3 md:w-3/4 sm:w-full">
          <div className="font-PlayfairDisplay text-5xl font-semibold leading-[52.8px] mb-6 tracking-wider 2xl:text-4xl xl:text-3xl lg:mb-4 md:text-2xl md:mb-2 sm:text-xl sm:tracking-wide sm:leading-6">
            “WORDS CAN’T DESCRIBE THE LEVEL OF EXCELLENCE YOU EXPERIENCE HERE.”
          </div>
          <div className="font-Sofia font-light text-lg lg:text-base sm:text-sm">
            Ellekay, TripAdvisor
          </div>
        </section>
      </main>
    </Layout>
  )
}
