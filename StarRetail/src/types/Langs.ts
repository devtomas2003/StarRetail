type HeaderType = {
    lang?: string;
    slogan?: string;
    plSearch?: string;
    whoWeAre?: string;
    accountArea?: string;
    hoverCart?: string;
    homeMenu?: string;
    ticketMenu?: string;
    storesMenu?: string;
    helpMenu?: string;
};

type FooterType = {
    footerMaps?: string;
    footerCart?: string;
    footerTermsAndConds?: string;
    footerExchanges?: string;
    footerAtend?: string;
    footerPayMethod?: string;
    payMethodCard?: string;
    payMethodMbWay?: string;
    payMethodBank?: string;
    payMethodCarrier?: string;
    footerSocial?: string;
    copyright?: string;
};

export type HomeType = {
    sliderSlFirst?: string;
    sliderSlSecond?: string;
    sliderSlThird?: string;
    mostEventsTl?: string;
    mostStoresTl?: string;
    footer?: FooterType;
    header?: HeaderType;
};

export type LoginType = {
    footer?: FooterType;
    header?: HeaderType;
    idTitle?: string;
    userlbl?: string;
    passlbl?: string;
    lblacctype?: string;
    clientTp?: string;
    lojisTp?: string;
    eventsTp?: string;
    forgotPass?: string;
    btnStartSession?: string;
    createAcct?: string;
};

export type ErrorNotFoundType = {
    footer?: FooterType;
    header?: HeaderType;
    imgError?: string;
    notFoundTxt?: string;
    btnBack?: string;
}

export type AccountType = {
    footer?: FooterType;
    header?: HeaderType;
    menTitle?: string;
    tickMenOpt?: string;
    orderMenOpt?: string;
    fatsMenOpt?: string;
    addrMenOpt?: string;
    confMenOpt?: string;
    endSessMenOpt?: string;
}

export type TicketsType = {
    ticketTitle?: string;
    conserWarm?: string;
    lblname?: string;
    lbllocal?: string;
    lblvalidtk?: string;
    lblrestrict?: string;
    lbldate?: string;
    lblduraction?: string;
    lvlViewTk?: string;
    lvldate?: string;
};

export type CartType = {
    footer?: FooterType;
    header?: HeaderType;
}