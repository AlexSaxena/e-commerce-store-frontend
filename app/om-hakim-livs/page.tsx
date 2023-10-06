import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Snow from '../../public/assets/images/Hakim_Headshot_Profile.png'

export default function page() {
  return (
    <div className='flex justify-center flex-col w-full h-full'>
        <h1 className='text-center text-4xl font-semibold text mt-12'> Om Hakim livs</h1> 
       <div className=''>
          <Image 
          src={Snow}
          width={500}
          height={0}
          alt='Hakim'
          className="mt-12 mb-4 hover:scale-110 transition duration-500 cursor-pointer m-auto bg-black rounded-full shadow-2xl"
          />
       </div>
      
        <section className='grid grid-cols-4  w-full text-center bg-slate-100 mt-3 shadow-xl divide-x-8 divide-x-reverse'>
  
        <div className='col-start-2 col-span-2 bg-white mt-4 shadow-xl mb-4 rounded-xl'>
          <h2 className='mt-4 text-xl font-bold py-2'>Välkommen till Hakims Online Mataffär</h2>
          <p className='py-8 px-12'>Hej och välkommen till Hakims Online Mataffär! Vi är stolta över att vara din pålitliga källa för färska och högkvalitativa livsmedel levererade direkt till din dörr. Låt oss berätta lite mer om oss och vad som driver oss.</p>
        </div>

        <div className='col-start-1 col-span-1 bg-white shadow-xl rounded-xl'>
          <h2 className='mt-12 text-xl font-bold py-2'> Vår Berättelse </h2>
          <p className='py-8 px-12'>Hakims Online Mataffär grundades med en vision att göra det enklare och bekvämare för människor att få tillgång till de bästa livsmedlen utan att behöva lämna hemmet. Vår grundare, Hakim, insåg vikten av att erbjuda kvalitetsprodukter till rimliga priser samtidigt som vi strävar efter att minska vårt ekologiska avtryck.</p>
        </div>

        <div className='col-start-2 col-span-1 bg-white shadow-xl rounded-xl'>
          <h2 className='mt-12 text-xl font-bold py-2'> Vårt Uppdrag </h2>
          <p className='py-8 px-12'>Vårt uppdrag är enkelt - att erbjuda dig det bästa inom mat och dagligvaror, med bekvämlighet och kundnöjdhet som våra främsta prioriteringar. Vi handplockar noggrant våra produkter för att säkerställa att du får de bästa och färskaste varorna varje gång du handlar hos oss. Dessutom arbetar vi ständigt för att minimera vår påverkan på miljön genom att använda miljövänliga förpackningar och transportlösningar.</p>
        </div>

        <div className='col-start-3 col-span-1 bg-white shadow-xl rounded-xl'>
          <h2 className='mt-12 text-xl font-bold py-2'>Våra Tjänster</h2>
          <p className='py-8 px-12'>Hos Hakims Online Mataffär hittar du ett brett utbud av livsmedel och dagligvaror som täcker alla dina behov. Vårt sortiment inkluderar färska frukt och grönsaker, kött och fisk av högsta kvalitet, mejeriprodukter, delikatesser, samt ett stort urval av icke-förderiverade och ekologiska alternativ. Vi är stolta över att erbjuda snabb och pålitlig hemleverans, så att du kan spara tid och energi.</p>
        </div>

        <div className='col start-4 col-span-1 bg-white shadow-xl rounded-xl'>
          <h2 className='mt-12 text-xl font-bold py-2'>Vårt Team</h2>
          <p className='py-8 px-12'>Vår passionerade och dedikerade team arbetar hårt varje dag för att säkerställa att din upplevelse hos oss är enastående. Vi är här för att svara på dina frågor, ta emot din feedback och göra din online-shopping så smidig som möjligt.</p>
        </div>

        <div className='col-start-2 col-span-2 bg-white mt-4 shadow-xl rounded-xl'>
          <h2 className='mt-12 text-xl font-bold py-2'>Kontakta Oss</h2>
          <p className='py-8 px-12'>Om du har några frågor, kommentarer eller förslag är du alltid välkommen att kontakta oss. Vi uppskattar din åsikt och ser fram emot att höra från dig.

          Tack för att du valde Hakims Online Mataffär för dina matinköp. Vi ser fram emot att hjälpa dig att fylla ditt hem med de bästa livsmedlen och bekvämligheten du förtjänar!

          Vänliga hälsningar,

          Hakims Online Mataffärsteam

          </p>
        </div>
</section>
    </div>
  )
}
