import { ABI } from "../abi/auction"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS

export const MinterListNFT = (
  tokenId,
  price,
  amount,
  limitPrice,
  period,
  isERC721,
) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "MinterListNFT",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      _amount: amount,
      _limitPrice: limitPrice,
      _period: period,
      _isERC721: isERC721,
    },
  }
}

export const fetchAuctionItems = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "fetchAuctionItems",
    abi: ABI,
  }
}
