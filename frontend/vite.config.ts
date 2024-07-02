import MillionLint from '@million/lint';
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
const _plugins = [react()]  as PluginOption[];
_plugins.unshift(MillionLint.vite(
))

export default defineConfig({
  plugins: _plugins  as PluginOption[],
  logLevel: 'error'
});