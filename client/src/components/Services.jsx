import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { Ri24HoursFill, RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({color, title, icon, subtitle}) => {
    return(
        <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
            <div className={`w-10 h-10 rounded-full pt-2.5 flex justify-center ${color}`}>
                {icon}
            </div>
            <div className='ml-5 flex flex-col flex-1'>
                <h3 className='mt-2 text-white text-lg'>{title}</h3>
                <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
            </div>
        </div>
    );

}

const Services = () => {
    return(
        <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start item-start'>
                    <h1 className='text-whtie text-3xl sm:text-5xl py-2 text-gradient'>Services that we <br />continue to improve</h1>
                </div>
            </div>
            <div className='flex-1 flex flex-col item-center justify-start'>
                <ServiceCard 
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting the qulity of our service"
                />

                <ServiceCard 
                    color="bg-[#8945f8]"
                    title="Best Exchange Rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting the qulity of our service"
                />

                <ServiceCard 
                    color="bg-[#f84550]"
                    title="Fastest transactions"
                    icon={<Ri24HoursFill fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting the qulity of our service"
                />

            </div>


        </div>
    )
}

export default Services;