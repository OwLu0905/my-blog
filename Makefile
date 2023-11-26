# Define the base command
BASE_COMMAND := pnpm dlx shadcn-ui@latest add

# Rule to run the specified command for the given suffix
%:
	$(BASE_COMMAND) $@

# Phony target to display available targets
.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo "Available targets are determined dynamically based on the command suffix."

# Default target, which does nothing but print a message
.DEFAULT:
	@echo "Error: Unknown target. Use 'make help' for usage information."
