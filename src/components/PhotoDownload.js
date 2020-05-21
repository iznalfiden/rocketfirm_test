import * as React from 'react'

function PhotoDownload({ linksFromSingle, linkFromList }) {

    const styles = {
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
        height: "49.24px",
        background: "green"
    }

    return (
        <a href={`${linksFromSingle ? linksFromSingle.download : null || linkFromList ? linkFromList.download : null}?force=true`} rel="nofollow">
            <button style={linksFromSingle ? styles : null} type="button" className="btn">
                <img src="downloadList.png" alt="download"></img>
            </button>
        </a>
    )
}

export default PhotoDownload