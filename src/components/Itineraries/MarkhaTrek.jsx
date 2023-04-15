import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const MarkhaTrek = () => {
    return (
        <div className="w-full py-12 px-4 pt-8">
            <h1 className='text-center py-2 font-bold uppercase lg:text-2xl'>Itinerary</h1>
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 01: Leh 3500m - Zingchen 3400m - Yurutse 4150m </h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Today you will drive to Zingchen passing Spituk village and reach Zingchen.
                                Here you start your trek to Yurutse. As you make your way you will start gaining altitude reaching a maximum altitude of approximately 4,150 meters.
                                Upon arriving in Yurutse, tea and snacks will be ready.
                                Your camp will set up for the night and rest up for the next leg of the trek.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 02: Yurutse 4150m - Ganda La 4960m - Skiu 3366m</h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                As you make your way from Yurutse to Ganda La, you will gain altitude, reaching a maximum altitude of approximately 4,960 meters at the pass. Remember to drink plenty of water and stay well-nourished to keep your energy levels up. After crossing Ganda La, you will begin a descent to Skiu, reaching a lower altitude of approximately 3,366 meters. Overnight in camp.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 03: Skiu 3366m - Sara 3620m - Markha 3760m </h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Today will be long and moderate hike till the charming Markha Village. Cross a few streams along the way.Reach the largest hamlet in the middle of this cold and arid desert. You will discover green fields, willow trees and a deserted palace. Visit the monastery and fort ruins, if time permits. Overnight in camps.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 04: Markha 3760m - Hankar 4030m</h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                This day will be packed with stunning views and you will come across many stream and river crossings. Make your way through settlements and grazing grounds. Take in the stunning view of Kangya Tse Peak 6,400 meters when walking towards Hankar. Overnight in tents.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 05: Hankar 4030m - Nimaling 4840m</h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                A gradual trail leads to the Nimaling plateau campsite. From here the view of the wide open valley with wide grazing grounds, and the backdrop of Kangya Tse Peak. Please note that there will be cold winds blowing constantly at such altitudes. Overnight will be spent in tents/ homestay.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <h2>Day 06: Nimaling(4840m) - Shang Sumdo (3680m) via Kongmaru La(5260m)</h2>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                After an early breakfast we will hike up a steep climb to reach the top of the highest pass on the trail - Kongmaru La. Take in the great sights of Nun Kun in the West and Saser Kangri to the North. Enjoy the moment before steep descent to the beautiful Markha gorge. The views and the trail passes down following the narrow Markha gorge and is unbelievably beautiful and will surprise you unless you trek it. A sharp descent from the pass top gets us to the base of the pass named Lartsa. From there, another 2 hours will bring you to the campsite of Chuskirmo. From Chuskirmo, we trek for another 1 hour to Chokdo, where our cab waits to take us to Leh.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
export default MarkhaTrek;