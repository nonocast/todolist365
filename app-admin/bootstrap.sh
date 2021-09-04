#!/usr/bin/env sh
echo "start frontend @bootstrap"

if test "${BACKEND_BASE+x}"; then
  cat >/var/www/console/runtime.config.js<<EOF
window.BACKEND_BASE = '$BACKEND_BASE'
EOF
fi

nginx -g "daemon off;"