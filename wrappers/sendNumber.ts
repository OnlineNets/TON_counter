import { toNano } from 'ton-core';
import { Counter } from './Counter';
import { compile, NetworkProvider } from '@ton-community/blueprint';


export async function run(provider: NetworkProvider) {
    const counter = provider.open(
        Counter.createFromConfig({}, await compile('Counter'))
    );

    console.log("sending~~~~");
    await counter.sendNumber(provider.sender(), toNano('0.01'), 123n);
    console.log("is sent");
}