import {Arguments, Argv, CommandModule} from "yargs";
import {buildErrors} from "../../build";

interface BuildArguments extends Arguments {

}

export class BuildCommand implements CommandModule {
    command = "build";
    describe = "Run build operation.";

    builder(args: Argv) {
        return args;
    }

    async handler(args: BuildArguments) {
        await buildErrors('client');
        await buildErrors('server');
    }
}
