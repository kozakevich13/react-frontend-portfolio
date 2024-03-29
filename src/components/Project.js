import React  from 'react'
import { useEffect, useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { useTranslation } from "react-i18next";

 
function Project({id, image, name, stack, live, source, desc_en, desc_ua}) {
    const [desc, setDesc] = useState(desc_en)
    const { i18n } = useTranslation();

    useEffect (()=>{
        if(i18n.language == 'en') {
            setDesc(desc_en)
        } else setDesc(desc_ua)
    },[i18n.language])

  return (
    <div className="">
        <div className="card mb-5" style={{maxWidth:'900px'}}>
        <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
            <div style={{maxWidth: '300px'}} className="card min-vw-10">
                <img src={image} style={{width: '100%'}} className="img-fluid rounded-start px-lg-0" alt={name} />
            </div>
            <div className="">
                <div className="card-body px-4">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text ">{desc}</p>
                    <div className="mt-5 align-text-bottom">
                        <p className="card-text">{stack}</p>
                            <p className="card-text d-flex gap-4">
                                <a href={live} target="_blank" rel="noreferrer" className='link'>
                                    Live Site <BiLinkExternal style={{color: 'hsl(205, 72%, 37%)'}}/>
                                </a>
                                <a href={source} target="_blank" rel="noreferrer" className='link'>
                                    Source Code <AiOutlineGithub style={{color: 'hsl(205, 72%, 37%)'}} />
                                </a>    
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Project