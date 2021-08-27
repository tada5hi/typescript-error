import {Arguments, Argv, CommandModule} from "yargs";
import {generateErrors} from "../../build";

export class GenerateCommand implements CommandModule {
    command = "generate";
    describe = "Generate client and server error classes.";

    builder(args: Argv) {
        return args;
    }

    async handler(args: Arguments<unknown>) {
        await generateErrors();
    }
}
