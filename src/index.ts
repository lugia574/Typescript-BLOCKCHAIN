import crypto from "crypto";

interface BlockShape {
  // 해쉬값
  hash: string;
  // 이전의 해쉬값
  prevHash: string;
  // 블록의 위치
  height: number;
  // 데이터
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string): string {
    const toHash = `${prevHash}${height}${data}`;

    return crypto.createHash(`sha256`).update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  // 이전 해쉬값 불러오기 method
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );

    this.blocks.push(newBlock);
  }

  public getBlock() {
    return [...this.blocks];
  }
}

const blockschain = new Blockchain();

blockschain.addBlock("First one");
blockschain.addBlock("Second one");
blockschain.addBlock("Third one");

blockschain.getBlock().push(new Block("ssssssss", 222222, "hahahahahahahaha"));

console.log(blockschain.getBlock());
