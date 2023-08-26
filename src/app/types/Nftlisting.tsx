interface Contract {
  address: string;
  name: string;
  symbol: string;
  totalSupply: string;
  tokenType: string;
  openSea: OpenSea;
  contractDeployer: string;
  deployedBlockNumber: number;
}

interface OpenSea {
  lastIngestedAt: string;
}

interface Attribute {
  value: any;
  trait_type: string;
  display_type?: string;
  max_value?: number;
}

interface RawMetadata {
  image: string;
  external_url: string;
  animation_url: string;
  background_color: string;
  name: string;
  description: string;
  attributes: Attribute[];
}

interface TokenUri {
  gateway: string;
  raw: string;
}

interface Medum {
  gateway: string;
  thumbnail: string;
  raw: string;
  format: string;
  bytes: number;
}

export default interface NftListingItemType {
  contract: Contract;
  tokenId: string;
  tokenType: string;
  title: string;
  description: string;
  timeLastUpdated: string;
  rawMetadata: RawMetadata;
  tokenUri: TokenUri;
  media: Medum[];
}
