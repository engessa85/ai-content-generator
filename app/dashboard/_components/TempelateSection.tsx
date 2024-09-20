'use client'
import React from 'react'
import Tempelates from '@/app/(data)/Tempelates'
import Card from "./Card"
import { useState, useEffect } from 'react'

export interface tempelateItems {
  name:string,
  desc:string,
  category:string,
  icon:string,
  aiPrompt:string,
  slug:string,
  form:FormType[]
}

export interface FormType {
  label:string,
  field:string,
  name:string,
  required?:boolean
}

interface TempelateSectionProps {
  searchvalueis: string;
}

function TempelateSection({searchvalueis}:TempelateSectionProps) {

  const [searchState, setSerachState] = useState(Tempelates)

  const filterData = Tempelates.filter(element => (
    element.name.toLowerCase().includes(searchvalueis.toLocaleLowerCase())
  ))
  useEffect(()=>{
    

    if(filterData){
      setSerachState(filterData)
    }else{
      setSerachState(filterData)
    }

  },[searchvalueis])

  
  

  
  
 
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
      {searchState.map((item:tempelateItems,index:number)=>(
       <Card key={item.slug} {...item} />
      ))}
    </div>
  )
}

export default TempelateSection