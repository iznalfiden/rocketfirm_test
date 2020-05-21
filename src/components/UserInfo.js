  
import React from 'react'


export default function UserInfo({ userFromSingle, userFromList }) {

    const linkStyles = {
        color: "white",
        textDecoration: "none"
    }


    return (
        <>
            <span className="text-white">{userFromSingle ? userFromSingle.name : null || userFromList ? userFromList.name : null}</span>
            <a style={linkStyles} href={`https://www.instagram.com/${userFromSingle ? userFromSingle.instagram_username : null || userFromList ? userFromList.instagram_username : null}/`}>
                
                <span className="text-white">@{userFromSingle ? userFromSingle.instagram_username : null || userFromList ? userFromList.instagram_username : null}</span>
            </a>
        </>
    )
}