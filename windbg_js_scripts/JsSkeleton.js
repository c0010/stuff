/**
 *
 */

"use strict";

const log = x => host.diagnostics.debugLog(x + "\n");
const system = x => host.namespace.Debugger.Utility.Control.ExecuteCommand(x);
const u8 = x => host.memory.readMemoryValues(x, 1, 1)[0];
const u16 = x => host.memory.readMemoryValues(x, 1, 2)[0];
const u32 = x => host.memory.readMemoryValues(x, 1, 4)[0];
const u64 = x => host.memory.readMemoryValues(x, 1, 8)[0];

function IsKd() { return host.namespace.Debugger.Sessions.First().Attributes.Target.IsKernelTarget != 0; }
function $(r){ if(!IsKd()) return host.currentThread.Registers.User[r]; else return host.namespace.Debugger.State.DebuggerVariables.curprocess.Threads.First().Registers.User[r]; }


/**
 *
 */
function invokeScript()
{
}


/**
 *
 */
function initializeScript()
{
}


/**
 *
 */
function uninitializeScript()
{
}
