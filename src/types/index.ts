import { SubmittableExtrinsic } from '@polkadot/api/types';
import BN from 'bn.js';

export interface TransferItem {
    address: string;
    amount: string;
}
export interface VestedTransferItem extends TransferItem{
    vestedMonths: number;
    startingBlock: number;
}

export interface VestingSchedule {
    locked: string;
    perBlock: string;
    startingBlock: number;
}

export type ExtrinsicPayload = SubmittableExtrinsic<'promise'>;