import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

// Every Controller or Service or Repository has a module. A module determines what is imported
// and exported and is used for dependency injection.

// Modules tag creates a DI Container.

// Imports is similar to saying go into imported module and get everything that is exported so
// our service or controller or repository can use it.
@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
