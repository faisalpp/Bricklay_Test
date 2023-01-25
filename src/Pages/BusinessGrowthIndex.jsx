import React, { useState } from 'react'
import { TabList, TabPanel,Tabs,Tab } from 'react-tabs'
import BusinessGrowthTab from './BusinessGrowthTab'
import BusinessGrowthTab2 from './BusinessGrowthTab2'
import BusinessGrowthTab3 from './BusinessGrowthTab3'

const BusinessGrowthIndex = () => {
  const [tabIndex,setTabIndex] = useState(0);
  
    return (
    <Tabs tabIndex={tabIndex} onSelect={setTabIndex}>
    <div className='flex lg:flex-row flex-col justify-center'>
     <div className='lg:relative flex flex-col'>
      <div className='lg:absolute flex lg:-top-12'>
       <TabList className='flex'>
        <Tab><div className={`flex items-center justify-center cursor-pointer shadow-xl lg:w-[300px] w-[120px] lg:h-[100px] h-[50px] ${tabIndex === 0?'text-t2 bg-white':'bg-t5'}`}><h3 className='lg:text-lg text-[8px] font-bold'>BUSINESS GROWTH</h3></div></Tab>
        <Tab><div className={`flex items-center justify-center cursor-pointer shadow-xl lg:w-[300px] w-[120px] lg:h-[100px] h-[50px] ${tabIndex === 1?'text-t2 bg-white':'bg-t5'}`}><h3 className='lg:text-lg text-[8px] font-bold'>BUSINESS GROWTH</h3></div></Tab>
        <Tab><div className={`flex items-center justify-center cursor-pointer shadow-xl lg:w-[300px] w-[120px] lg:h-[100px] h-[50px] ${tabIndex === 2?'text-t2 bg-white':'bg-t5'}`}><h3 className='lg:text-lg text-[8px] font-bold'>BUSINESS GROWTH</h3></div></Tab>
       </TabList> 
      </div>
     </div> 
     <TabPanel><BusinessGrowthTab/></TabPanel>
     <TabPanel><BusinessGrowthTab2/></TabPanel>
     <TabPanel><BusinessGrowthTab3/></TabPanel>
    </div>
    </Tabs>
  )
}

export default BusinessGrowthIndex