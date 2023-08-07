export function TwitterFollowCard({formatUserName, userName, name, isFollowin}){
    //Render src image
    const imageSrc = `https://unavatar.io/${userName}`

    //Render stare
    const text = isFollowin ? 'Siguiendo' : 'seguir';
    const buttonClassName = isFollowin
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc} 
                alt="RiversGG" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
            <button className={buttonClassName}>{text}</button>
            </aside>
        </article>
    )
}