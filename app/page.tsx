import Footer from '@/components/footer/Footer'
import SoundList from '@/components/sound/SoundList'

export default function Home() {
  return (
    <main className="w-ful h-full">
      <div className="flex flex-col justify-center items-center gap-[2rem] container">
        <div className="pt-[4rem] text-center text-white">
          <div className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold">
            Moodlody
          </div>
          <div>
            “Moodlody is an app with nature sounds to help you focus, sleep,
            relax and relieve stress.”
          </div>
        </div>
        <div>
          <SoundList />
        </div>
      </div>
      <Footer />
    </main>
  )
}
