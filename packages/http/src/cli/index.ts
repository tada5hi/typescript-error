#!/usr/bin/env node
import 'reflect-metadata';
import yargs from 'yargs';
import {BuildCommand} from "./commands/build";

// tslint:disable-next-line:no-unused-expression
yargs
    .usage("Usage: $0 <command> [options]")
    .demandCommand(1)
    .command(new BuildCommand())
    .strict()
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;
