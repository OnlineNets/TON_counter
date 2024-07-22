import { toNano } from '@ton/core';
import { Counter } from '../wrappers/Counter';
import { run as send_number } from '../wrappers/sendNumber';
import { run as get_total} from "../wrappers/getTotal";
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$4");
    const counter = provider.open(Counter.createFromConfig({}, await compile('Counter')));

    await counter.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(counter.address);

    // run methods on `counter`
    await send_number(provider);
    await get_total(provider);
}
