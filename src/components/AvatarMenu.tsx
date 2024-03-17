import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { UserIcon, LogOutIcon, SettingsIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AvatarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-12 group p-0 relative focus:bg-transparent data-[state=open]:bg-transparent cursor-pointer">
        <Avatar className='bg-slate-600 text-red-600 '>
          <AvatarImage alt="" />
          <AvatarFallback className='bg-zinc-600'>
            <UserIcon className="text-secondary"></UserIcon>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-4">
        <div className="flex flex-col items-center p-4">
          
          <DropdownMenuLabel className="select-none">Usuário</DropdownMenuLabel>
          <DropdownMenuLabel className="select-none text-gray-500 font-normal">
            biofy
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator className="bg-gray-200" />
        <DropdownMenuItem onClick={() => { console.log('Hello') }}>
          <SettingsIcon className="w-4 h-4 mr-4 text-gray-700" />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { console.log('Hello') }}>
          <LogOutIcon className="w-4 h-4 mr-4 text-gray-700" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
