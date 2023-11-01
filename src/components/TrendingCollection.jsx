import Dog from "../../images/dog.png"
import Dog1 from "../../images/dog1.png"
import Dog2 from "../../images/dog2.png"
import DogAvatar from "../../images/dogAvatar.png"
import Mushroom from "../../images/mushroom.png"
import Mushroom1 from "../../images/mushroom1.png"
import Mushroom2 from "../../images/mushroom2.png"
import Robot1 from "../../images/robot1.png"
import Robot2 from "../../images/robot2.png"

import Robot from "../../images/roboto.png"

export function TrendingCollection() {
  return (
    <div className="w-[1000px] p-12 m-auto text-white">
        <div className="">
            <h3 className="text-2xl">Trending Collection</h3>
            <p className="mt-2 opacity-80">Checkout our weekly updated trending collection.</p>

            <div className="flex justify-center gap-x-5 mt-10">
                <div>
                    <img src={Dog} className="w-[300px]" alt="this is img"/>
                    <div className="flex mt-4 gap-2">
                        <img src={Dog1} alt="this is img" />
                        <img src={Dog2} alt="this is img" />
                        <div className="bg-[#A259FF] w-28 h-24 text-white flex items-center justify-center rounded-xl">1025+</div>
                    </div>
                    <div className='p-2'>
                        <p>DSGN Animals</p>
                        <div className='flex items-center gap-x-2 mt-3'>
                            <img src={DogAvatar} className='w-[20px]' />
                            <span className='text-[10px]'>MrFox</span>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Mushroom} className="w-[300px]" alt="this is img"/>
                    <div className="flex mt-4 gap-2">
                        <img src={Mushroom1} alt="this is img" />
                        <img src={Mushroom2} alt="this is img" />
                        <div className="bg-[#A259FF] w-28 h-24 text-white flex items-center justify-center rounded-xl">1025+</div>
                    </div>
                    <div className='p-2'>
                        <p>Magic Mushrooms</p>
                        <div className='flex items-center gap-x-2 mt-3'>
                            <img src={DogAvatar} className='w-[20px]' />
                            <span className='text-[10px]'>Shroomie</span>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Robot} className="w-[300px]" alt="this is img"/>
                    <div className="flex mt-4 gap-2">
                        <img src={Robot1} alt="this is img" />
                        <img src={Robot2} alt="this is img" />
                        <div className="bg-[#A259FF] w-28 h-24 text-white flex items-center justify-center rounded-xl">1025+</div>
                    </div>
                    <div className='p-2'>
                        <p>Disco Machines</p>
                        <div className='flex items-center gap-x-2 mt-3'>
                            <img src={DogAvatar} className='w-[20px]' />
                            <span className='text-[10px]'>BeKind2Robots</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

