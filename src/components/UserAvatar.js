import React from 'react'

export default function UserAvatar({ userFromSingle, userFromList }) {

    return (
        <>
            <img style={{height: "70px"}} className="rounded" src={userFromSingle ? userFromSingle.profile_image.large : null || userFromList ? userFromList.profile_image.large : null} alt="profile_image" />
        </>
    )
}